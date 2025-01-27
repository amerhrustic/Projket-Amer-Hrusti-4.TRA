// Configure your import map in config/importmap.rb. Read more: https://github.com/rails/importmap-rails
// Entry point for the build script in your package.json
import "@hotwired/turbo-rails"
import "controllers"

import "trix"
import "@rails/actiontext"

import LocalTime from "local-time"
LocalTime.start()
import "controllers"
