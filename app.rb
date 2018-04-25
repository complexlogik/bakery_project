require "sinatra"
require "sinatra/reloader"
require 'sendgrid-ruby'
include SendGrid

get '/' do
  erb :index
end