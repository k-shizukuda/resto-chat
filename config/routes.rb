Rails.application.routes.draw do
  root "tables#new"
  resources :tables, only: [:new, :create] do
    collection do
      get :call
    end
    resources :messages, only: [:index, :create]
    namespace :api do
      resources :messages, only: :index, defaults: { format: 'json' }
    end
  end
end
