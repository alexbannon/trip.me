class SearchesController < ApplicationController

  def homepage
    @instagram_photos = Instagram.tag_recent_media('victory', {:count => 10})
  end

  def search_results
    
  end

end
