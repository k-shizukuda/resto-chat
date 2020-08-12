class MessagesController < ApplicationController
  before_action :set_table
  
  def index
    @message = Message.new
    @messages = Message.all.order(id: "DESC")
    @sidemessages = Message.order(id: "DESC").limit(10)
  end
  def create
    @message = Message.create(message_params)
    respond_to do |format|
      format.html {redirect_to table_messages_path(@table.id)}
      format.json
    end
  end


  private
  def message_params
    params.require(:message).permit(:content, :stamp).merge(table_id: @table.name)
  end

  def set_table
    @table = Table.find(params[:table_id])
  end
end
