class Post < ApplicationRecord
 has_rich_text :body
 has_many :romments, dependent: :destroy
  end
  