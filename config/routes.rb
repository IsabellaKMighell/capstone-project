Rails.application.routes.draw do
  
  resources :lines, only: [:create, :destroy]
  resources :consumers, only: [:update]
  #resources :business_users
  resources :businesses, only: [:index, :show]

  get "/me", to: "sessions#show"

  post "/login", to: "sessions#create"
  delete "/logout", to: "sessions#destroy"
  #post "/business_user_signup", to: "business_users#create"
  post "/consumer_signup", to: "consumers#create"
  # Routing logic: fallback requests for React Router
  # Leave this here to help deploy your app later!
  get "*path", to: "fallback#index", constraints: ->(req) { !req.xhr? && req.format.html? }
end
