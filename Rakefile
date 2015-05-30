# -*- coding: utf-8 -*-
require 'pp'
ROOT_PATH = File.dirname(File.expand_path(__FILE__))

desc 'as `rake run`'
task :default => :run

desc 'I need BEER'
task :beer do
  puts "🍺"
end

desc 'compile haml and scss'
task :run => ['haml', 'scss']

desc 'compile haml'
task :haml do
  sh "haml #{ROOT_PATH}/src/haml/index.haml #{ROOT_PATH}/index.html"
end

desc 'compile scss'
task :scss do
  sh "scss #{ROOT_PATH}/src/scss/style.scss #{ROOT_PATH}/css/style.css"
end
