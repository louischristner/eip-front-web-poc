module Components.Dashboard exposing (viewDashboard)

import Html exposing (Html, text, div, h1, ul, li, a)
import Html.Attributes exposing (href)


---- VIEW ----


viewNavbar : Html msg
viewNavbar =
    ul []
        [ li [] [ a [ href "/dashboard" ] [ text "Dashboard" ] ]
        , li [] [ a [ href "/" ] [ text "Login page" ] ]
        ]

viewDashboard : Html msg
viewDashboard =
    div []
        [ viewNavbar
        , div []
            [ h1 [] [ text "Dashboard" ] ]
        ]
