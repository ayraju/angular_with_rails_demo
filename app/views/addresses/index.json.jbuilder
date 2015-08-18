json.array!(@addresses) do |address|
  json.extract! address, :id, :city, :pin_code, :address
  json.url address_url(address, format: :json)
end
