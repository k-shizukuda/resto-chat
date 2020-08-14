class Message < ApplicationRecord
  belongs_to :table
  validates :content, presence: true
end
