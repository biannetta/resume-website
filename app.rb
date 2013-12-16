require 'sinatra'
require 'haml'

get '/' do
	@links = [
		{:name => 'LinkedIn', :href => 'http://www.linkedin.com'},
		{:name => 'Twitter', :href => 'http://www.twitter.com'},
		{:name => 'Github', :href => 'http://www.github.com'}
	]
	haml :index
end

not_found do
	status 404
	haml :'404'	
end
