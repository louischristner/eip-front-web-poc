module Components.Auth.SignIn exposing (viewSignIn)

import Html exposing (Html, text, div, h1)
import Components.Inputs exposing (viewInputField)
import Components.Inputs exposing (viewInputButton)
import Html.Attributes exposing (class)

viewSignIn : msg -> msg -> String -> (String -> msg) -> String -> (String -> msg) -> Html msg
viewSignIn connectMsg updateSignMsg email updateEmailMsg password updatePasswordMsg =
    div [ class "Connection" ]
        [ h1 [] [ text "Sign In" ]
        , viewInputField "email" email "Email" updateEmailMsg
        , viewInputField "password" password "Password" updatePasswordMsg
        , viewInputButton "Sign In" connectMsg
        , viewInputButton "I don't have an account" updateSignMsg
        ]
