module Main exposing (..)

import Browser
import Url exposing (Url)
import Browser.Navigation as Nav
import Html exposing (Html, text, h3, div)

import Route exposing (Route)
import Route exposing (Route(..))
import Components.Auth.SignIn exposing (viewSignIn)
import Components.Auth.SignUp exposing (viewSignUp)
import Components.Dashboard exposing (viewDashboard)

import Http
import Json.Decode as JD
import Json.Encode as JE


---- MODEL ----


type alias User =
    { email : String
    , password : String
    , confirmPassword : String
    }

type alias Model =
    { route : Route
    , page : Page
    , navKey : Nav.Key
    , signIn : Bool
    , user : User
    }

type Page
    = NotFoundPage
    | DashboardPage
    | LoginPage

initUser : User
initUser =
    { email = ""
    , password = ""
    , confirmPassword = ""
    }

initModel : Url -> Nav.Key -> Model
initModel url navKey =
    { route = Route.parseUrl url
    , page = NotFoundPage
    , navKey = navKey
    , signIn = True
    , user = initUser
    }

init : () -> Url -> Nav.Key -> ( Model, Cmd Msg )
init _ url navKey =
    let model = initModel url navKey
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
    | UpdateSignIn
    | UpdateUserEmail String
    | UpdateUserPassword String
    | UpdateUserConfirmPassword String
    | SignInUser
    | SignUpUser
    | GotUser (Result Http.Error (String))


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

        ( UpdateSignIn, _ ) ->
            ( { model | signIn = not model.signIn, user = initUser }, Cmd.none )

        ( UpdateUserEmail email, _ ) ->
            let
                oldUser = model.user
                newUser = { oldUser | email = email }

            in ( { model | user = newUser }, Cmd.none )

        ( UpdateUserPassword password, _ ) ->
            let
                oldUser = model.user
                newUser = { oldUser | password = password }
            in ( { model | user = newUser }, Cmd.none )

        ( UpdateUserConfirmPassword confirmPassword, _ ) ->
            let
                oldUser = model.user
                newUser = { oldUser | confirmPassword = confirmPassword }
            in ( { model | user = newUser }, Cmd.none )

        ( SignInUser, _ ) ->
            let
                email = model.user.email
                password = model.user.password
            in
                if (not <| String.isEmpty email) && (not <| String.isEmpty password) then
                    ( model, connectUser "/login" email password )
                else ( model, Cmd.none )

        ( SignUpUser, _ ) ->
            let
                email = model.user.email
                password = model.user.password
                confirmPassword = model.user.confirmPassword
            in
                if (not <| String.isEmpty email) && (not <| String.isEmpty password) && password == confirmPassword then
                    ( model, connectUser "/register" email password )
                else ( model, Cmd.none )

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
            viewConnection model

viewNotFound : Html Msg
viewNotFound =
    h3 [] [ text "404 Not Found" ]

viewConnection : Model -> Html Msg
viewConnection model =
    div []
        [ if model.signIn then
            viewSignIn
                SignInUser
                UpdateSignIn
                model.user.email
                UpdateUserEmail
                model.user.password
                UpdateUserPassword
          else
            viewSignUp
                SignUpUser
                UpdateSignIn
                model.user.email
                UpdateUserEmail
                model.user.password
                UpdateUserPassword
                model.user.confirmPassword
                UpdateUserConfirmPassword
        ]


---- REQUESTS ----


connectUser : String -> String -> String -> Cmd Msg
connectUser sufRoute email password =
    Http.post
        { url = "https://285e3a1b3959.ngrok.io" ++ sufRoute
        , body = Http.jsonBody <| JE.object [ ( "email", JE.string email ), ( "password", JE.string password ) ]
        , expect = Http.expectJson GotUser JD.string
        }


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
