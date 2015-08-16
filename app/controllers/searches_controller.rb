class SearchesController < ApplicationController

  def homepage
    @instagram_photos = Instagram.tag_recent_media('vacation', {:count => 30})
  end

  def search_results

    @usersearch = params[:guestsearch]
    @instagram_photos = Instagram.tag_recent_media(@usersearch, {:count => 33})
    @photos_with_location = []
    for photo in @instagram_photos do
      if photo.location != nil
        if @photos_with_location.length > 8
          break
        else
          @photos_with_location << photo
        end
      end
    end
    puts "-" * 100
    puts @usersearch
    puts "-" * 100
    puts @instagram_photos.length
    puts "-" * 100
    puts @photos_with_location
    puts "-" * 100
    puts @photos_with_location[0].location[15...80]

  end

  def geo_results
    @location = params[:id]
    @location_array = @location.split("_")
    @lat = @location_array[1].strip
    @long = @location_array[3].strip
    puts "-" * 100
    puts @location
    puts "-" * 100
    puts @lat
    puts "-" * 100
    puts @long
    puts "-" * 100
    @instagram_photos = Instagram.media_search(@lat, @long, {:count => 1000})
    @photos_with_geo = []
    for photo in @instagram_photos do
      if photo.location != nil
        if @photos_with_geo.length > 9
          break
        else
          @photos_with_geo << photo
        end
      end
    end
    puts "-" * 100
    puts @usersearch
    puts "-" * 100
    puts @instagram_photos.length
    puts "-" * 100
    puts @photos_with_geo

  end
end
