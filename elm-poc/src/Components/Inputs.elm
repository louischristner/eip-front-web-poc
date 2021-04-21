module Components.Inputs exposing (viewInputField, viewInputButton)

import Html exposing (Html, div, input, button, text)
import Html.Attributes exposing (type_, value, placeholder)
import Html.Events exposing (onClick)
import Html.Events exposing (onInput)

viewInputField : String -> String -> String -> (String -> msg) -> Html msg
viewInputField iType iValue iPlaceholder onInputMsg =
    div []
        [ input
            [ type_ iType
            , value iValue
            , placeholder iPlaceholder
            , onInput onInputMsg
            ]
            []
        ]

viewInputButton : String -> msg -> Html msg
viewInputButton iText onClickMsg =
    div []
        [ button [ onClick onClickMsg ]
            [ text iText ]
        ]
