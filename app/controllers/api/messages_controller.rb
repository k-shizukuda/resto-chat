class Api::MessagesController < ApplicationController
  def index
    last_stamp_ids = params[:id]
    i = 1
    @messages = []
    last_stamp_ids.each do |id|
      message = Message.where(table_id: "#{i}").where("id >= ?", id).last
      @messages[i - 1] = message
      i += 1
    end
  end
end