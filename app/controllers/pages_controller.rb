class PagesController < ApplicationController

  def index
    @thing = [{'title' => 'Who am I?','description' => ""},
      {'title' => 'JAVASCRIPT WIZARD', 'description' => "While other warlocks and sorcerers gained abilities in things like 'necromancy', 'summoning', and  'destroying foes with forces beyond mortal comprehension'. I was gifted with the perhaps the most mysterious of all powers... Javascript.  Sure I can't level a village with a flick of the wrist, but I can write, explain, and integrate a recursive sorting algorithm faster than you can say 'You're not a real wizard'. ", 'image'=>'wizard.png'},
      {'title' => 'COMPLETE COWBOY', 'description' => ``},
      {'title' => 'RUBY','description' => ``},
      {'title' => 'Whats good Bitch','description' => ``},
      {'title' => 'contact','description' => ``}]
   
    respond_to do |format|
      format.html
      format.json { render json: @thing }
    end
  end
end
