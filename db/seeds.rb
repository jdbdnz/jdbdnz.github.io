email = 'jdbdean@gmail.com'
if User.where(email: email).blank?
  generated_password = Devise.friendly_token.first(8)
  user = User.create!(:email => email, :password => generated_password)
end
