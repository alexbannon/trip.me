Rails.application.routes.draw do
  root 'searches#homepage'
  get 'search_results' => 'searches#search_results'
  get 'test' => 'searches#test'
end
