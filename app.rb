require 'sinatra'
require 'sinatra/reloader'
require 'sendgrid-ruby'
include SendGrid

get '/' do
  erb :index
end

get '/cakes' do
  erb :cakes
end

get '/cookies' do
  erb :cookies
end

get '/muffins' do
  erb :muffins
end

get '/contact_us' do
  erb :contact_us
end

get '/thanks' do
  erb :thanks
end

post '/contact_us' do
  from = Email.new(email: 'complex.logik@gmail.com')
  to = Email.new(email: params[:email])
  subject = params[:subject]
  content = Content.new(
    type: 'text',
    value: params[:content]
  )

  mail = Mail.new(from, subject, to, content)

  sg = SendGrid::API.new(
    api_key: ENV['seng_key']
  )

  response = sg.client.mail._('send').post(request_body: mail.to_json)

  puts response.status_code

  puts response.body

  puts response.headers
  redirect '/thanks'
end
