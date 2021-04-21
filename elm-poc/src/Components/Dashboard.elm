module Components.Dashboard exposing (viewDashboard)

import Html exposing (Html, text, div, h1, ul, li, a)
import Html.Attributes exposing (href, class)


---- VIEW ----


viewNavbar : Html msg
viewNavbar =
    ul [ class "Navbar" ]
        [ li [] [ a [ class "Navbar-main", href "/dashboard" ] [ text "Dashboard" ] ]
        , li [] [ a [ href "/" ] [ text "Login page" ] ]
        ]

viewDashboard : Html msg
viewDashboard =
    div []
        [ viewNavbar
        , div [ class "Dashboard" ]
            [ h1 [] [ text "Dashboard" ] ]
        ]
