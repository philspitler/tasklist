require 'auto_api'
require './app'

map '/api' do #can use whatever path or add version or anything since this is modular
  run AutoApi::Base
end

map '/' do
    run MyApp
end
