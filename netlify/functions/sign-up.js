/* eslint-disable */

export default async function handler (event, context) {
  // Get data submitted in request's query string parameters.
  const body = event.queryStringParameters

  // Optional logging to see the responses in the command line where the
  // Next.js app is running.
  console.log('body: ', body)

  // Guard clause checks for email and returns early if it is not found.
  if (!body.email) {
    // Sends a HTTP bad request error code.
    return {
      statusCode: 400,
      body: JSON.stringify({ error: 'Email not found' })
    }
  }

  // Here, you could send the email address to a service like Mailchimp to
  // manage your mailing list.
  //
  // This is just an example, so we won't do anything except redirect back to
  // the homepage.

  return {
    statusCode: 302,
    headers: {
      Location: '/'
    }
  }
}
