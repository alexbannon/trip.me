class SearchesController < ApplicationController

  def homepage

  end

  def search_results
    response = HTTParty.get("https://api.instagram.com/v1/tags/potato/media/recent?access_token=")
    @photos = []
    @photos.push(response["data"][0]["images"]["standard_resolution"]["url"])
    @photos.push(response["data"][1]["images"]["standard_resolution"]["url"])
    @photos << response["data"][2]["images"]["standard_resolution"]["url"]
    @photos << response["data"][3]["images"]["standard_resolution"]["url"]
    @photos << response["data"][4]["images"]["standard_resolution"]["url"]
    @photos << response["data"][5]["images"]["standard_resolution"]["url"]
    @photos << response["data"][6]["images"]["standard_resolution"]["url"]
    @photos << response["data"][7]["images"]["standard_resolution"]["url"]
    @photos << response["data"][8]["images"]["standard_resolution"]["url"]
    @photos << response["data"][9]["images"]["standard_resolution"]["url"]
    puts "-" * 50
    puts @photos
  end

end
