json.array! @messages do |message|
  json.id message.id
  json.stamp message.stamp
  json.table_id message.table_id
  json.content message.content
end

