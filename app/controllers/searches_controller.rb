class SearchesController < ApplicationController

  def homepage
    @instagram_photos = Instagram.tag_recent_media('victory', {:count => 10})
  end

  def search_results
    @usersearch = params[:guestsearch]
    @instagram_photos = Instagram.tag_recent_media(@usersearch, {:count => 10})

    puts "-" * 100
    puts @usersearch
    puts "-" * 100
    puts @instagram_photos
  end
end
