class SearchesController < ApplicationController

  def homepage
    @instagram = Instagram.tag_recent_media('victory', {:count => 10})
  end


end
