require 'auto_api'
require './app'

map '/api' do
  run AutoApi::Base
end

map '/' do
    run App
end
