require 'sinatra'
require 'linkedin'
require 'haml'

configure do
	set :api, "75ck78s4p891h2"
	set :secret, "nzFW2ktEp52yvyOD"
	set :otoken, "e1701440-5e62-4609-818b-b46bc3ee4ab8"
	set :osecret, "d2e0ca70-69e4-4172-992d-95cfcdf068d2"
end

get '/' do
	@links = [
		{:name => 'LinkedIn', :href => 'http://www.linkedin.com'},
		{:name => 'Twitter', :href => 'http://www.twitter.com'},
		{:name => 'Github', :href => 'http://www.github.com'}
	]
	client = LinkedIn::Client.new(settings.api, settings.secret)
	client.authorize_from_access(settings.otoken, settings.osecret);
	haml :index, :locals => { :profile => client.profile }
end

not_found do
	status 404
	haml :'404'
end
