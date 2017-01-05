class PagesController < ApplicationController

  def index
    @thing = [{'title' => 'Who am I?','description' => "Born and raised in an antarctic wasteland, my early life in Alaska consisted of hunting for sustenance and fighting off packs of feral wolves with nothing but an icicle. I lived my teenage years in Austin Texas, where bandits and cowboys waged a bloody civil war day in and day out, forcing me to move lest I perish in that desert hellscape. I relocated to San Diego, where I currently reside, free from the terrors of the rest of the world. I'm a web developer, a maker, a writer, and above all else, a person with passion for creation."},
      {'title' => 'RUBY WRANGLER', 'description' => "While my main area of focus is Ruby on Rails, I'm equiped with an arsenal of other languages and tools"},
      {'title' => 'WEB WIZARD', 'description' => "While other warlocks and sorcerers gained abilities in things like 'necromancy', 'summoning', and  'destroying foes with forces beyond mortal comprehension'. I was gifted with the perhaps the most mysterious of all powers... Coding.  Sure I can't level a village with a flick of the wrist, but I can write, integrate, and explain a recursive sorting algorithm faster than you can say 'You're not a real wizard'. ", 'image'=>'wizard.png'},
      {'title' => 'MAKER','description' => ``},
      {'title' => 'Whats good','description' => ``},
      {'title' => 'Contact','description' => ""}]
   
    respond_to do |format|
      format.html
      format.json { render json: @thing }
    end
  end
end
