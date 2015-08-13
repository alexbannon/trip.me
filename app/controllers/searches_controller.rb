class SearchesController < ApplicationController

  def homepage
    @instagram_photos = Instagram.tag_recent_media('vacation', {:count => 10})
  end

  def search_results

    @usersearch = params[:guestsearch]
    @instagram_photos = Instagram.tag_recent_media(@usersearch, {:count => 50})
    @photos_with_location = []
    for photo in @instagram_photos do
      if photo.location != nil
        if @photos_with_location.length > 9
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
    @usersearch = params[:guestsearch]
    @instagram_photos = Instagram.media_search(37.7808851, -122.3948632, {:count => 1000})
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
