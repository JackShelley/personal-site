class PagesController < ApplicationController

  def index
    @thing = [{'title' => 'JAVASCRIPT WIZARD', 'description' => "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.", 'image'=>'wizard.png'},
      {'title' => 'COMPLETE COWBOY', 'description' => "FUCK", 'image'=>'cowboy.png'},
      {'title' => 'FUCK','description' => "Lo consequa", 'image'=>'miner.png'}]
   
    respond_to do |format|
      format.html
      format.json { render json: @thing }
    end
  end
end
