#!/usr/bin/env ruby
require 'json'

ISH_VERSION = '0.4.11'
MODELS_ROOT = "https://cdn.jsdelivr.net/gh/wasya-co/ishlib3js@#{ISH_VERSION}/public/vendor/models"
opts = {
  'brunette' => { type: 'F' },
  'cara' => { type: 'F' },
  'eve' => { type: 'F' },

  'denis' => { type: 'M' },
  'gregor' => { type: 'M' },
}


outs = {}
opts.each do |name, vals|
  outs[name] = { type: vals[:type], url: "#{MODELS_ROOT}/avatars/#{name}/model.glb" }
end

File.write('index.json', JSON.pretty_generate( outs ))
