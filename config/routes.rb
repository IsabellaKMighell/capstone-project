Rails.application.routes.draw do
  
  resources :consumers
  resources :business_users
  resources :businesses

  get "/parent/me", to: "business_users#show"
  get "/me", to: "session#show"

  post "/login", to: "session#create"
  delete "/logout", to: "session#destroy"
  post "/signup", to: "business_users#create"
  # Routing logic: fallback requests for React Router
  # Leave this here to help deploy your app later!
  get "*path", to: "fallback#index", constraints: ->(req) { !req.xhr? && req.format.html? }
end
