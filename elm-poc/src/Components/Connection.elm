module Components.Connection exposing (viewConnection)

import Html exposing (Html, div)

import Components.Auth.SignIn exposing (viewSignIn)
import Components.Auth.SignUp exposing (viewSignUp)

viewConnection : Bool -> Html msg
viewConnection signIn =
    div []
        [ if signIn then
            viewSignIn
          else
            viewSignUp
        ]
