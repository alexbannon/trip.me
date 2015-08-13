class SearchesController < ApplicationController

  def homepage
    @instagram_photos = Instagram.tag_recent_media('vacation', {:count => 10})
  end

  def search_results

    @usersearch = params[:guestsearch]
    @instagram_photos = Instagram.tag_recent_media(@usersearch, {:count => 500})
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
    puts @instagram_photos
    puts "-" * 100
    puts @photos_with_location
  end
end
