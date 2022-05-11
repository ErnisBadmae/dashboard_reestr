# config valid only for current version of Capistrano
lock ">=3.6"

#!!!
set :application, "front_open_profsdc"
set :repo_url, "git@git.nms:prof_sdc/front_open_profsdc.git"

# Default deploy_to directory is /var/www/my_app_name
set :tmp_dir, "/tmp/open-reestr-nopriz"

# Branch
set :branch, ENV['BRANCH'] if ENV['BRANCH']

# Default value for keep_releases is 5
set :keep_releases, 5

# Symfony console commands will use this environment for execution
set :symfony_env,  "prod"

# Set this to 2 for the old directory structure
set :symfony_directory_structure, 3
# Set this to 4 if using the older SensioDistributionBundle
set :sensio_distribution_version, 5

# symfony-standard edition directories
set :bin_path, "bin"
set :config_path, "config"
#set :var_path, "var"
set :web_path, "public"

# The next settings are lazily evaluated from the above values, so take care
# when modifying them
#set :log_path, fetch(:var_path) + "/logs"
#set :cache_path, fetch(:var_path) + "/cache"
#set :symfony_console_path, fetch(:bin_path) +"/console"
#set :symfony_console_flags, "--no-debug"

# asset management
set :assets_install_path, "public"
set :assets_install_flags,  '--symlink'

# Share files/directories between releases
set :linked_dirs, ["node_modules"]

# To use a .env file:
set :linked_files, [".env",".env.production"]

#set :composer_install_flags, '--optimize-autoloader'

# asset management
set :assets_install_path, "public"
set :assets_install_flags,  '--symlink'


#after 'deploy:updated', 'symfony:assets:install'
after 'deploy:published', 'deploy:permissions'
after 'deploy:published', 'dependencies:npm'
after 'deploy:published', 'dependencies:npm_encore'

set :permission_method, :acl
set :file_permissions_users, ["www-data"]
set :file_permissions_groups, ["www"]
#set :file_permissions_paths, ["var"]


namespace :deploy do
    task :permissions do
        on roles(:all) do
            if test("[ -d #{release_path} ]")
                execute "cd '#{release_path}';"
                puts "set permissions for #{release_path}"
            end
        end
    end
end
namespace :dependencies do
    task :npm do
        on roles(:all) do
            execute "cd '#{release_path}'; npm install;"
        end
    end
    task :npm_encore do
        on roles(:all) do
            execute "cd '#{release_path}'; npm run build;"
        end
    end
end
