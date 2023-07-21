class User < ApplicationRecord
    has_manny :user_products
    has_manny :products, through: :user_products
end
