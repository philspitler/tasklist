require 'sinatra/base'

class ReactBackboneApp < Sinatra::Base
  set :public_folder, File.dirname(__FILE__) + '/react_backbone'
  # ... app code here ...
  get '/' do
    send_file './react_backbone/index.html'
  end

  # start the server if ruby file executed directly
  run! if app_file == $0
end
