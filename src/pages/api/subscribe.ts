const mailchimp = require('@mailchimp/mailchimp_marketing');

mailchimp.setConfig({
  apiKey: process.env.MAILCHIMP_API_KEY,
  server: process.env.MAILCHIMP_API_SERVER,
});

const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

export default async (req: any, res: any) => {
  const { email } = req.body;

  if (!email || !re.test(email)) {
    return res.status(400).json({ error: 'Email is required' });
  }

  try {
    await mailchimp.lists.addListMember(process.env.MAILCHIMP_AUDIENCE_ID, {
      email_address: email,
      status: 'subscribed',
    });

    return res.status(201).json({ error: '' });
  } catch (error: any) {
    const message = error.response?.res?.text
      ? JSON.parse(error.response.res.text)
      : { title: 'Error during sending form!' };
    return res.status(500).json({ error: message.title || 'Error during sending form!' });
  }
};
