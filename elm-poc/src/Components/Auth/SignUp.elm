module Components.Auth.SignUp exposing (viewSignUp)

import Html exposing (Html, text, div, h1)
import Components.Inputs exposing (viewInputField)
import Components.Inputs exposing (viewInputButton)
import Html.Attributes exposing (class)

viewSignUp : msg -> msg -> String -> (String -> msg) -> String -> (String -> msg) -> String -> (String -> msg) -> Html msg
viewSignUp connectMsg updateSignMsg email updateEmailMsg password updatePasswordMsg confirmPassword updateConfirmPasswordMsg =
    div [ class "Connection" ]
        [ h1 [] [ text "Sign Up" ]
        , viewInputField "email" email "Email" updateEmailMsg
        , viewInputField "password" password "Password" updatePasswordMsg
        , viewInputField "password" confirmPassword "Confirm password" updateConfirmPasswordMsg
        , viewInputButton "Sign Up" connectMsg
        , viewInputButton "I already have an account" updateSignMsg
        ]

