require 'auto_api'
require './angular_app'
require './react_backbone_app'

map '/api' do
  run AutoApi::Base
end

map '/angular' do
    run AngularApp
end

map '/react-backbone' do
    run ReactBackboneApp
end
