module Main exposing (..)

import Browser
import Url exposing (Url)
import Browser.Navigation as Nav
import Html exposing (Html, text, h3)

import Components.Dashboard exposing (viewDashboard)
import Route exposing (Route)
import Route exposing (Route(..))
import Components.Connection exposing (viewConnection)


---- MODEL ----


type alias Model =
    { route : Route
    , page : Page
    , navKey : Nav.Key
    , signIn : Bool
    }

type Page
    = NotFoundPage
    | DashboardPage
    | LoginPage

init : () -> Url -> Nav.Key -> ( Model, Cmd Msg )
init _ url navKey =
    let
        model =
            { route = Route.parseUrl url
            , page = NotFoundPage
            , navKey = navKey
            , signIn = True
            }
    in initCurrentPage ( model, Cmd.none )

initCurrentPage : ( Model, Cmd Msg ) -> ( Model, Cmd Msg )
initCurrentPage ( model, existingCmds ) =
    let
        ( currentPage, mappedPageCmds ) =
            case model.route of
                Route.NotFound ->
                    ( NotFoundPage, Cmd.none )

                Route.Dashboard ->
                    ( DashboardPage, Cmd.none )

                Route.Login ->
                    ( LoginPage, Cmd.none )

    in
    ( { model | page = currentPage }
    , Cmd.batch [ existingCmds, mappedPageCmds ]
    )


---- UPDATE ----


type Msg
    = DashboardPageMsg
    | LoginPageMsg
    | LinkClicked Browser.UrlRequest
    | UrlChanged Url


update : Msg -> Model -> ( Model, Cmd Msg )
update msg model =
    case ( msg, model.page ) of
        ( DashboardPageMsg, DashboardPage ) ->
            ( { model | page = DashboardPage }
            , Cmd.none
            )

        ( LoginPageMsg, LoginPage ) ->
            ( { model | page = LoginPage }
            , Cmd.none
            )

        ( LinkClicked urlRequest, _ ) ->
            case urlRequest of
                Browser.Internal url ->
                    ( model
                    , Nav.pushUrl model.navKey (Url.toString url)
                    )

                Browser.External url ->
                    ( model
                    , Nav.load url
                    )

        ( UrlChanged url, _ ) ->
            let
                newRoute = Route.parseUrl url
            in
            ( { model | route = newRoute }, Cmd.none )
                |> initCurrentPage

        ( _, _ ) ->
            ( model, Cmd.none )



---- VIEW ----


view : Model -> Browser.Document Msg
view model =
    { title = "Elm POC"
    , body = [ currentView model ]
    }

currentView : Model -> Html Msg
currentView model =
    case model.page of
        NotFoundPage ->
            viewNotFound

        DashboardPage ->
            viewDashboard

        LoginPage ->
            viewConnection model.signIn

viewNotFound : Html Msg
viewNotFound =
    h3 [] [ text "404 Not Found" ]


---- PROGRAM ----


main : Program () Model Msg
main =
    Browser.application
        { init = init
        , view = view
        , update = update
        , subscriptions = always Sub.none
        , onUrlRequest = LinkClicked
        , onUrlChange = UrlChanged
        }
