# -*- coding: utf-8 -*-
# Generated by Django 1.11.29 on 2020-09-21 01:04
from __future__ import unicode_literals

from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    dependencies = [
        ('interactwel', '0021_interactwelplan_user_id'),
    ]

    operations = [
        migrations.CreateModel(
            name='InteractwelPlanActorActions',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('action_id', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='interactwel.InteractwelAction')),
                ('actor_id', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='interactwel.InteractwelActor')),
            ],
            options={
                'verbose_name': 'Interactwel Plan Actor Action Mapping',
                'verbose_name_plural': 'Interactwel Plan Actor Action Mapping',
                'db_table': 'interactwel_plan_actor_action',
                'managed': True,
            },
        ),
        migrations.RemoveField(
            model_name='interactwelplan',
            name='actions',
        ),
        migrations.RemoveField(
            model_name='interactwelplan',
            name='actors',
        ),
        migrations.AddField(
            model_name='interactwelplanactoractions',
            name='plan_id',
            field=models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='interactwel.InteractwelPlan'),
        ),
        migrations.AlterUniqueTogether(
            name='interactwelplanactoractions',
            unique_together=set([('plan_id', 'actor_id', 'action_id')]),
        ),
    ]