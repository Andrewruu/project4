class User < ApplicationRecord
    has_many :user_products
    has_many :products, through: :user_products
    
    has_secure_password

    validates :username, presence: true, uniqueness: true
end
