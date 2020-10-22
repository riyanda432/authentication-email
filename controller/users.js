module.exports = {
    signUp:async (req, res, next) => { 
        console.log('UserController.SignUp Called !');
    },

    signIn:async (req, res, next) => { 
        console.log('UserController.SignIn Called !');
    },

    secret:async (req, res, next) => { 
        console.log('UserController.Secret Called !');
    }
}