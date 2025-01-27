class Romment < ApplicationRecord
  belongs_to :post
  brodcasts_to :post
end
