import { google } from 'googleapis'
// Google library for Oauth2.0


const googleOauthClient = new google.auth.OAuth2(
    ServerConfig.GOOGLE_CLIENT_ID,
    ServerConfig.GOOGLE_CLIENT_SECRET,
    ServerConfig.UI_ROOT_URI
)

export function getGoogleAuthUrl() {
    const scopes = [
        'https://www.googleapis.com/auth/userinfo.profile',
        'https://www.googleapis.com/auth/userinfo.email',
    ];

    return googleOauthClient.generateAuthUrl({
        access_type: 'offline',
        prompt: 'consent',
        scope: scopes
    })
}

export async function getGoogleUser({ code }) {
    const { tokens } = await googleOauthClient.getToken(code);

    const googleUser = await axios.get(
        `https://www.googleapis.com/userinfo/v2/me?alt=json&access_token=${tokens.access_token}`,
        {
            headers: {
                Authorization: `Bearer ${tokens.id_token}`
            }
        }
    )
        .then((res) => {
            const newUser = new GoogleUser()
        })
        .catch(err => {
            throw new Error(err.message)
        })

    return googleUser;
}

export async function googleAuth(input, context) {
    const googleUser = await getGoogleUser({ code: input.code })

    let user = await this.userModel
        .findOne({ githubId: String(googleUser.id) })
        .exec();

    console.log()
}
