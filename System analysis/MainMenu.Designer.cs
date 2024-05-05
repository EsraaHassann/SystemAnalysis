namespace System_analysis
{
    partial class MainMenu
    {
        /// <summary>
        /// Required designer variable.
        /// </summary>
        private System.ComponentModel.IContainer components = null;

        /// <summary>
        /// Clean up any resources being used.
        /// </summary>
        /// <param name="disposing">true if managed resources should be disposed; otherwise, false.</param>
        protected override void Dispose(bool disposing)
        {
            if (disposing && (components != null))
            {
                components.Dispose();
            }
            base.Dispose(disposing);
        }

        #region Windows Form Designer generated code

        /// <summary>
        /// Required method for Designer support - do not modify
        /// the contents of this method with the code editor.
        /// </summary>
        private void InitializeComponent()
        {
            AccessRoadmapSection = new Button();
            SelectRoadmap = new Button();
            AccessResources = new Button();
            AddRoadmap = new Button();
            button5 = new Button();
            label1 = new Label();
            SuspendLayout();
            // 
            // AccessRoadmapSection
            // 
            AccessRoadmapSection.Font = new Font("Sitka Text", 10.1999989F, FontStyle.Regular, GraphicsUnit.Point, 0);
            AccessRoadmapSection.Location = new Point(344, 161);
            AccessRoadmapSection.Name = "AccessRoadmapSection";
            AccessRoadmapSection.Size = new Size(220, 56);
            AccessRoadmapSection.TabIndex = 0;
            AccessRoadmapSection.Text = "Access Roadmap Section";
            AccessRoadmapSection.UseVisualStyleBackColor = true;
            // 
            // SelectRoadmap
            // 
            SelectRoadmap.Font = new Font("Sitka Text", 10.1999989F, FontStyle.Regular, GraphicsUnit.Point, 0);
            SelectRoadmap.Location = new Point(344, 223);
            SelectRoadmap.Name = "SelectRoadmap";
            SelectRoadmap.Size = new Size(220, 56);
            SelectRoadmap.TabIndex = 1;
            SelectRoadmap.Text = "Select Roadmap";
            SelectRoadmap.UseVisualStyleBackColor = true;
            SelectRoadmap.Click += SelectRoadmap_Click;
            // 
            // AccessResources
            // 
            AccessResources.Font = new Font("Sitka Text", 10.1999989F, FontStyle.Regular, GraphicsUnit.Point, 0);
            AccessResources.Location = new Point(344, 285);
            AccessResources.Name = "AccessResources";
            AccessResources.Size = new Size(220, 56);
            AccessResources.TabIndex = 2;
            AccessResources.Text = "Access Resources";
            AccessResources.UseVisualStyleBackColor = true;
            // 
            // AddRoadmap
            // 
            AddRoadmap.Font = new Font("Sitka Text", 10.1999989F, FontStyle.Regular, GraphicsUnit.Point, 0);
            AddRoadmap.Location = new Point(344, 347);
            AddRoadmap.Name = "AddRoadmap";
            AddRoadmap.Size = new Size(220, 56);
            AddRoadmap.TabIndex = 3;
            AddRoadmap.Text = "Add Roadmap";
            AddRoadmap.UseVisualStyleBackColor = true;
            // 
            // button5
            // 
            button5.Font = new Font("Sitka Text", 10.1999989F, FontStyle.Regular, GraphicsUnit.Point, 0);
            button5.Location = new Point(344, 409);
            button5.Name = "button5";
            button5.Size = new Size(220, 56);
            button5.TabIndex = 4;
            button5.Text = "Manage Account";
            button5.UseVisualStyleBackColor = true;
            // 
            // label1
            // 
            label1.AutoSize = true;
            label1.Font = new Font("Sitka Display", 19.8000011F, FontStyle.Bold, GraphicsUnit.Point, 0);
            label1.Location = new Point(355, 72);
            label1.Name = "label1";
            label1.Size = new Size(201, 49);
            label1.TabIndex = 5;
            label1.Text = " Main Menu ";
            // 
            // MainMenu
            // 
            AutoScaleDimensions = new SizeF(8F, 20F);
            AutoScaleMode = AutoScaleMode.Font;
            BackColor = SystemColors.ActiveCaption;
            ClientSize = new Size(887, 589);
            Controls.Add(label1);
            Controls.Add(button5);
            Controls.Add(AddRoadmap);
            Controls.Add(AccessResources);
            Controls.Add(SelectRoadmap);
            Controls.Add(AccessRoadmapSection);
            Name = "MainMenu";
            Text = "MainMenu";
            ResumeLayout(false);
            PerformLayout();
        }

        #endregion

        private Button AccessRoadmapSection;
        private Button SelectRoadmap;
        private Button AccessResources;
        private Button AddRoadmap;
        private Button button5;
        private Label label1;
    }
}