require 'sinatra'
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
  subject = "Our Catalog"
  content = Content.new(
    type: 'text',
    value: "
Our Entire Catalog!
  
Name: Layer Cake Price: $7.99 Description: Chocolatey goodness,with tons of layer for extra sweetness, and crunch
Name: Caramel Almond Cake Price: $9.99 Description: Caramel flavored cake with caramel syrup with candied nuts
Name: Macaroon Cake Price: $15.99 Description: chocolate ganashe with an assortment of macroons on top
Name: Fruit Cake Price: $12.99 Description: vanilla cake with assortment of fresh fruit
Name: Tiramisu Cake Price: $17.99 Description: ladyfingers dipped in coffee, layered with a whipped mixture of eggs, sugar, and mascarpone cheese, flavoured with cocoa
Name: Strawberry cheesecake Price: $11.99 Description: better then Juniors
Name: Fudge Cake Price: $9.99 Description:  made with chocolate cake mix, chocolate pudding, and chocolate chips
Name: Cake in Cups Price: $33.99 Description: yes they are worth it
Name: Frosted Cake Price: $77.99 Description: Special Cake    
Name: chocolate cookie Price: $1 Description: yummy chocolate cookie
Name: oatmeal cookie Price: $1 Description: yummy oatmeal cookie
Name: almond cookie Price: $1 Description: yummy almond cookie
Name: red velvet cookie Price: $1 Description: yummy red velvet cookie
Name: Pistachio Cookie Price: $1 Description: yummy Pistachio Cookie
Name: Rasberry Center Cookie Price: $1 Description: yummy rasberry center cookie
Name: Walnut cookie Price: $1 Description: yummy walnut topped cookie
Name: Frosting cookie Price: $1 Description: yummy frosting cookie
Name: Sprinkle topped cookie Price: $1 Description: yummy sprinke top cookie
Name: Cinimonroll Muffin Price: $2.99 Description: yummy cinimonroll muffin
Name: Apple Oat muffin Price: $3.99 Description: yummy appleoat muffin
Name: Blueberry muffin Price: $1000.00 Description: yummy blueberry muffin
Name: Erdbeer Muffin Price: $19 Description: yummy erdbeer muffin
Name: lemon blueberry Price: $22 Description: yummy lemonblueberry
Name: Meat and egg Price: $98 Description: yummy Meat and egg
Name: cornbread muffin Price: $57 Description: yummy cornbread muffin
Name: ricottafig muffin Price: $77 Description: yummy ricottafig muffin
Name: chocolate chip muffin Price: $2.88 Description: yummy chocolate chip muffin
let us know if we can help you with anything"
  )

  mail = Mail.new(from, subject, to, content)

  sg = SendGrid::API.new(
    api_key: ENV['seng_key']
  )

  response = sg.client.mail._('send').post(request_body: mail.to_json)
 redirect "/thanks"
end
