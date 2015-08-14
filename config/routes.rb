Rails.application.routes.draw do
  root 'searches#homepage'
  get 'search_results' => 'searches#search_results'
  get 'test' => 'searches#test'
  get 'geo_results/:id' => 'searches#geo_results', :constraints => { :id => /[^\/]+/ }
end
