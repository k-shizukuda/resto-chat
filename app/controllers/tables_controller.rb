class TablesController < ApplicationController

  def new
    @table = Table.new
  end

  def create
    @table = Table.new(table_params)
    if @table.save
      redirect_to table_messages_path(@table.id)
    else
      render :new
    end
  end

  def call
  end

  private
  def table_params
    params.require(:table).permit(:name)
  end

end
